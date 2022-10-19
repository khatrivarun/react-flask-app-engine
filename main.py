from flask import Flask, render_template

app = Flask(__name__, static_folder="./build/static", template_folder="./build")


@app.route("/hello")
def hello():
    return {"message": "Hello World!"}


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
