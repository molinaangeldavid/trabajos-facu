from copy import copy
hola = ["h","i",5]

def fun(hola):
    l = copy(hola)
    print(l[2])

fun(hola)
