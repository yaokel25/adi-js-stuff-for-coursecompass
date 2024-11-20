from flask import Flask


app = Flask(__name__)

@app.route('/')
def pythonHome():
    return "This is the python server"

@app.route('/data')
def showName():
    return {
        'Name':"Future Courses",
        'Phrase':'Future Course info'
    }

if __name__ == '__main__':
    app.run(debug=True)