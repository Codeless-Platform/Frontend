/* eslint-disable quotes */
carousel = (editor, opts = {}) => {
  const carouselScript = function (props) {
    let carouselDuration = props.duration;
    if (carouselDuration) {
      $('.carousel').carousel({
        interval: Number(carouselDuration),
      });
    } else {
      $('.carousel').carousel({
        interval: 5000,
      });
    }
  };

  editor.Components.addType('carousel', {
    model: {
      defaults: {
        tageName: 'div',
        components: `
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://via.placeholder.com/800x400" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://via.placeholder.com/800x400" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://via.placeholder.com/800x400" alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://via.placeholder.com/800x400" alt="Fourth slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

      `,

        script: carouselScript,
        'script-props': ['duration'],

        traits: [
          {
            type: 'text',
            name: 'duration',
            label: 'duration',
            placeholder: 'Insert duration in ms',
            changeProp: true,
          },
        ],
      },
    },
  });
  editor.BlockManager.add('carousel', {
    label: 'carousel',
    media: `<img src="./imgs/carousel.png" width=50  />`,
    category: 'Custom',
    content: {
      type: 'carousel',
    },
  });
};
