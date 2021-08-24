from os import listdir, getcwd, remove
from os.path import isfile, join, exists

path = "Merged Genki Till present.csv"
csv = []

for file in listdir(getcwd()):
    file_path = join(getcwd(), file)
    if isfile(file_path) and file.endswith('.csv'):
        with open(file_path, 'r', encoding='utf-8') as data:
            if len(csv) > 0:
                data.readline()
            
            words = data.read().split("\n")
            for i in words:
                csv.append(i)

# Remove duclicates
csv = list(dict.fromkeys(csv))
csv = "\n".join(csv).replace(",,\n", "")

if (exists(path)):
    remove(path)


with open(join(getcwd(), path), 'w', encoding='utf-8') as data:
    data.write(csv)