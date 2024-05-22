import requests

import gemini

res = requests.get("https://cpe.cse.nsysu.edu.tw/cpe/test_data/2024-04-23")
data = res.text

processed_data = gemini.select("所有 PDF 的 URL，請以一個字串的 list 表示", data)
print(processed_data)
