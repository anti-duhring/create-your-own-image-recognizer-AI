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