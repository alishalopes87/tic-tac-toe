from flask import Flask, jsonify,json
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def get_board():

    board = [[1,2,3],[4,5,6],[7,8,9]]

    return jsonify(*board)

# @app.route('/payment', methods=["POST"])
# def add_payment():



if __name__ == "__main__":
    # We have to set debug=True here, since it has to be True at the
    # point that we invoke the DebugToolbarExtension
    app.debug = True
    # make sure templates, etc. are not cached in debug mode
    app.jinja_env.auto_reload = app.debug


    # Use the DebugToolbar

    app.run(port=5000, host='0.0.0.0')