from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../Frontend Setup/edunolan-client/build')
CORS(app)

# API Routes
@app.route('/api/test')
def test_api():
    return jsonify({"status": "success", "message": "API is working!"})

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path.startswith('api/'):
        return jsonify({"error": "API route not found"}), 404
        
    static_file = os.path.join(app.static_folder, path)
    if not os.path.exists(static_file) or os.path.isdir(static_file):
        return send_from_directory(app.static_folder, 'index.html')
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(port=5000, debug=True)