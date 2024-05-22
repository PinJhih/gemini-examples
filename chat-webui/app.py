from flask import Flask, request, send_from_directory
import gemini

app = Flask(__name__, static_folder="./static")


@app.route("/")
def index():
    return send_from_directory("./static", "index.html")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.json
    message = data["message"]
    response = gemini.chat(message)
    return {"message": response}, 200


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
