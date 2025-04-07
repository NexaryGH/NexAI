const apiConfig = {
  openRouter: {
    baseUrl: "https://openrouter.ai/api/v1",
    endpoints: {
      chat: "/chat/completions"
    },
    models: {
      qwen: "qwen/qwen-2.5-coder-32b-instruct:free"
    }
  }
};

export default apiConfig;