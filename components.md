# Data

## Data layer

- Señores list:
  - id
  - name
  - status
  - profession
  - twitter
  - picture
  - alternativeText
  - selected

## Data modifications

- Toggle selected property of gentleman (?)
- Select all gentlemen
- Delete a gentleman

# Components

## App

- Contains a select all function
- Contains a delete function
- Contains a select function
- Contains a toggle function

- Sends the functions delete and toggle to ´Gentleman
- Sends the function "select all" to Button
- Sends the list of gentlemen to Info

## Info

- Receives de list of gentlemen
- Displays number of selected gentleman

## Button

- Receives a text
- Receives an action

## Gentleman

- Receives the delete function
- Receives de toggle function
- Receives a gentleman

//es importante poner las variables de estado

//Las variables de estado se van modificando machacando estados, MACHACAN SIEMPRE AL ANTERIOR.
//Si cambio un gato, cambio el objeto entero
//Si hay un array de señores y quiero modificarlo, tengo que machacarlo con un nuevo array de señores.
