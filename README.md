# Create your own image classifier AI
An easy and simple way to create your own ``image classifier AI`` (pre-trained) using [***ml5.js***](https://learn.ml5js.org/#/reference/image-classifier) and Google's [***Teachable Machine***](https://teachablemachine.withgoogle.com/train/image).

Ex: This image classifier can detect a charmander, squirtle or bulbasaur in a image.

![Document](https://user-images.githubusercontent.com/99638905/159101011-22d52074-46e7-40af-9b56-be0b440828f9.png)

# 1 - Creating your own model

First of all you need to create your own model by using the Google's machine learning tool called [***Teachable Machine***](https://teachablemachine.withgoogle.com/train/image).
This tool is really simple and intuitive, you can easily create the model in less than 10 minutes.

![Image-Model-Teachable-Machines](https://user-images.githubusercontent.com/99638905/159101206-6f305c5c-e937-4635-a66c-fb7492bee222.png)

1. Here you will create your own class, which means every "object" (or, in this case, every pokemon) that the AI will can recognize.

2. After you create all your classes make sure to trane the model. This process is when the AI will learn to regonize every class (pokemons).

3. After all of these process, its time to export your model.

# 2 - Exporting the model

Now that you create your own model you have to export them to your project.
You can export as ``Tensorflow.js``, standart ``Tensorflow`` or ``Tensorflow Lite``. In this project we'll pick the ``Tensorflow.js`` option.

![Image-Model-Teachable-Machines (2)](https://user-images.githubusercontent.com/99638905/159100975-4ce0b566-2125-43f7-93a6-660dabd04d22.png)

You also can choose if the model will be ***uploaded*** and being online or if it will be on your computer by ***downloading*** it.

If you pick the downloaded option make sure that you extract all the ``Json`` files to the ``my_model`` folder.

At the end you have to choose the code snippet to use. It can be ``javascript`` or ``p5.js``. We will use ``p5.js``. 

Just copy and paste the content on your ``index.html`` file.

# 3 - Using the model

Replace your script, which is inside the ``script`` tag at the ``index.html``, to this:
```html
<script src="script.js"></script>
```

And replace the ``script.js`` file to this:
```javascript
     // Classifier Variable
      let classifier;
      // Model URL
      let imageModelURL = './my_model/';
      
      // To store the classification
      let label = "";
      let pokemon;
    
      // Load the model first
      function preload() {
        classifier = ml5.imageClassifier(imageModelURL + 'model.json');
      }
    
      function setup() {
        createCanvas(640, 480);
        background(153);
        getImage();
      }
    function getImage(){
        pokemon = createImg('assets/test_images/charmander-test.jpg', imageReady);
        pokemon.hide();
    }
 

    function imageReady() {
        image(pokemon, 0, 0);
        classifier.classify(pokemon, gotResult)
        console.log('loaded!')
    }
      // When we get a result
    function gotResult(error, results) {
        // If there is an error
        if (error) {
          console.error(error);
          return;
        }
        // The results are in an array ordered by confidence.
        console.log(results)
        label = results[0].className;
        createDiv(`Label: ${results[0].label}`);
        createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
      }
```

This function will get the image test:
```javascript
    function getImage(){
        pokemon = createImg('assets/test_images/charmander-test.jpg', imageReady);
        pokemon.hide();
    }
```
Make sure that your test image is different that the images used to train the model, to make sure that your AI really learned how to recognize the object and not it just reproducing an information.

The result will be something like this:

![Document](https://user-images.githubusercontent.com/99638905/159101011-22d52074-46e7-40af-9b56-be0b440828f9.png)

Excellent! Now you have your own AI image classifier using your own model.

# Architecture and Technology
- HTML and JavaScript
- [p5.js](https://p5js.org/) library
- [ml5.js](https://learn.ml5js.org/) library
- [Google's Teachable Machine](https://teachablemachine.withgoogle.com/train/image)
