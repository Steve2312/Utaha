from os import listdir, getcwd, remove
from os.path import isfile, join, exists
import json

path = "lists.json"

dict = {
    "lists": [
        {
            "title": "Genki Volume 1",
            "description": "All vocabulary from Genki Volume 1 - Third Edition",
            "results": []
        }
    ]
}

for file in listdir(getcwd()):
    file_path = join(getcwd(), file)
    if isfile(file_path) and file.endswith('.csv'):
        with open(file_path, 'r', encoding='utf-8') as data:
            data.readline()
            amount_words = len(data.read().replace(",,\n", "").splitlines())
            dict["lists"][0]["results"].append({
                "name": file,
                "total" : amount_words
            })

with open(join(getcwd(), path), 'w', encoding='utf-8') as data:
    data.write(json.dumps(dict, indent = 4))