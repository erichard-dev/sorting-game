from flask import Flask, render_template
import os
import json

app = Flask(__name__)

@app.route('/')
def hello_world():
    return render_template('index.html')

@app.route('/data')
def get_data():
    data = { 
        'riddles': [ 
            { 
                'instruction': 'Ordonner la liste des plantes du systme solaire selon la distance croissante avec le soleil.', 
                'answer': ["mercure", "venus", "terre", "mars", "jupitère", "saturne", "uranus", "neptune"]
            },
            { 
                'instruction': 'Ordonner la liste de nombres dans l\'ordre croissant', 
                'answer': ["1", "2", "3", "4", "5"]
            },
            { 
                'instruction': 'Ordonner la liste de nombres dans l\'ordre décroissant', 
                'answer': ["5", "4", "3", "2", "1"]
            }
        ]
    }
    return json.dumps(data)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True,host='0.0.0.0',port=port)