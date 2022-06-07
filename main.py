from math import *
import os
from textwrap import wrap

os.system('cls' if os.name == 'nt' else 'clear')

print ('Welcome to the Encryptor!')
print ('\n\n')
print ('Encrypt, Decrypt, or get Keys?')
print ('\n\n\n\n')
action = input('>> ')

os.system('cls' if os.name == 'nt' else 'clear')

if action == 'encrypt' or action == 'Encrypt' or action == 'e':
    print ('Please enter Key')
    print ('\n')
    print ('it should look like this (11813702673492067742745)')
    print ('\n\n\n\n')
    publickeyinput = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    print ('Please enter text to encrypt')
    print ('\n\n\n\n')
    rawtexttoencrypt = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    rawasciitoencrypt = [ord(character) for character in rawtexttoencrypt]
    asciitoencrypt = []
    asciistringtoencrypt = ''
    for x in rawasciitoencrypt:
        asciitoencrypt.append(str('%03d' % int(x)))
    for x in asciitoencrypt:
        asciistringtoencrypt += x
    characterstoencrypt = list(asciistringtoencrypt)
    encryptedarray = []
    for x in characterstoencrypt:
        encryptedarray.append(int(x)*int(publickeyinput))
    editedencryptedarray = []
    for x in encryptedarray:
        if (x != 0):
            editedencryptedarray.append(x)
        else:
            editedencryptedarray.append(49673960482957385037163)
    finalencryptedmessage = ''
    for x in editedencryptedarray:
        finalencryptedmessage += str(x)
    print(finalencryptedmessage)

    print ('\n\n\n\n')
    input ('Press enter to exit ')
    os.system('cls' if os.name == 'nt' else 'clear')


if action == 'decrypt' or action == 'Decrypt' or action == 'd':
    print ('Please enter Key')
    print ('\n')
    print ('it should look like this (11813702673492067742745)')
    print ('\n\n\n\n')
    publickeyinput = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    print ('Please enter text to decrypt')
    print ('\n\n\n\n')
    rawtexttodecrypt = input('>> ')

    os.system('cls' if os.name == 'nt' else 'clear')

    splitencryptedarray = wrap(rawtexttodecrypt, 23)
    splitdecryptedarray = []
    
    print(splitencryptedarray)
    print ('\n\n\n\n')
    input ('Press enter to exit ')
    os.system('cls' if os.name == 'nt' else 'clear')



#118137026734920677427454967396048295738503716347254810693968270970980118137026734920677427454967396048295738503716359068513367460338713725496739604829573850371633544110802047620322823535441108020476203228235