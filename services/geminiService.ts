import { GoogleGenAI } from "@google/genai";

// 根據規範，應在呼叫時動態初始化以確保獲取最新的 API_KEY
export const generateAIResponse = async (userQuery: string): Promise<string> => {
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "我們的 AI 助手目前離線中（未配置 API Key）。如需業務洽談請直接聯繫 Jimmy Lee。";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `
      You are the virtual assistant for SYNLAGEN (Shen Le Jian Co., Ltd.), a global biotechnology company specializing in American Ginseng.
      Your tone is professional, scientific, yet accessible and warm.
      Company Vision: Using biotech to create convenient, effective health and functional foods focusing on Ginsenosides.
      Target Audience: Global customers (Taiwan, SE Asia, USA, etc.).
      
      Key Info:
      - Manager: Jimmy Lee (Business Manager)
      - Contact: jimmylee0719@gmail.com
      - Expertise: Supplements, Functional Foods, Portable Nutrition, OEM/ODM.
      
      Answer questions about nutrition, general health, and the company's mission in Traditional Chinese (Taiwan).
      Keep answers concise (under 100 words).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: userQuery,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "抱歉，我現在無法生成回應。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "目前連線至知識庫時發生錯誤，請稍後再試，或直接聯繫我們的業務經理。";
  }
};