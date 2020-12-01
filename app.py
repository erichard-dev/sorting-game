from flask import Flask, render_template
import os
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def get_data():
    data = { 
        'riddles': 
        [ 
            {
                'instruction': 'Ordonner la liste des plantes du systme solaire selon la distance croissante avec le soleil.', 
                'answers' : 
                [

                    {
                        'order': 8,
                        'answer': 'neptune',
                        'color': 'chartreuse',
                    },
                    {
                        'order': 1,
                        'answer': 'mercure',
                        'color': 'red',
                    },
                    {
                        'order': 2,
                        'answer': 'venus',
                        'color': 'dodgerblue',
                    },
                    {
                        'order': 3,
                        'answer': 'terre',
                        'color': 'dodgerblue',
                    },
                    {
                        'order': 4,
                        'answer': 'mars',
                        'color': 'red',
                    },
                    {
                        'order': 5,
                        'answer': 'jupitere',
                        'color': 'chartreuse',
                    },
                    {
                        'order': 6,
                        'answer': 'saturne',
                        'color': 'yellow',
                    },
                    {
                        'order': 7,
                        'answer': 'uranus',
                        'color': 'yellow',
                    }
                ]
            },
            { 
                'instruction': 'Ordonner la liste de nombres dans l\'ordre croissant',
                'answers' : [
                    {
                    'order': 1,
                    'answer': '1',
                    'color': 'dodgerblue',
                    },
                    {
                        'order': 2,
                        'answer': '2',
                        'color': 'dodgerblue',
                    },
                    {
                        'order': 3,
                        'answer': '3',
                        'color': 'yellow',
                    },
                    {
                        'order': 4,
                        'answer': '4',
                        'color': 'chartreuse',
                    },
                    {
                        'order': 5,
                        'answer': '5',
                        'color': 'red',
                    }
                ]  
            },
            {
                'instruction': 'Ordonner la liste de nombres dans l\'ordre décroissant',
                'answers' : 
                [
                    {
                    'order': 1,
                    'answer': '5',
                    'color': 'red',
                    },
                    {
                        'order': 2,
                        'answer': '4',
                        'color': 'chartreuse',
                    },
                    {
                        'order': 3,
                        'answer': '3',
                        'color': 'yellow',
                    },
                    {
                        'order': 4,
                        'answer': '2',
                        'color': 'dodgerblue',
                    },
                    {
                        'order': 5,
                        'answer': '1',
                        'color': 'dodgerblue',
                    }
                ]   
            }
        ]
    }
    return json.dumps(data)

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(debug=True,host='0.0.0.0',port=port)