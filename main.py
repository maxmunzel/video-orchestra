from flask import *
from flask.ext.socketio import SocketIO, emit, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'tzJV+JEqggs8OO4+CcXfQPeDlE5AD2R9oHO4XT+qdsuK7FOGK'
socketio = SocketIO(app)

@app.route('/<script>')
def index(script="config"):
    print(script)
    return render_template('index.html', script=script)


@app.route("/media/<filename>")
def send_media(filename):
    media_dir = "/Users/littlebird/Desktop/showtime/media"
    return send_from_directory(media_dir, filename)


@app.route("/src/<path:filename>")
def send_static(filename):
    return send_from_directory("static", filename)

@socketio.on("next")
def next():
    print("next")
    emit("next", broadcast=True)

@socketio.on("reset")
def next():
    print("reset")
    emit("reset", broadcast=True)


@socketio.on('connect')
def test_connect():
    print("SocketIO connected!")
    emit('my response', {'data': 'Connected'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

if __name__ == '__main__':
    #app.debug = True
    socketio.run(app, host="0.0.0.0")