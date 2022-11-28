from tkinter.filedialog import askdirectory
from tkinter import Tk
import os, hashlib
from pathlib import Path

Tk().withdraw()
path = askdirectory(title="Select a Folder")

file_list = os.listdir(path)

unique = dict()

for file in file_list:
    file_name =Path(os.path.join(path,file))

    if file_name.is_file():
        
        fileHash = hashlib.md5(open(file_name,'rb').read()).hexdigest()

        if fileHash not in unique:
            unique[fileHash] = file_name

        else:
            os.remove(file_name)
            print(f"success, dupe file" ,file_name, "deleted")
    else:
        print("not worked, sorry")
