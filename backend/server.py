from flask import Flask


app = Flask(__name__)

@app.route('/data')
def showName():
    return {
        'Name':"Adi",
        'Phrase':'Hello'
    }

if __name__ == '__main__':
    app.run(debug=True)