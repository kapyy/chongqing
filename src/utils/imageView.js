import $ from 'jquery'

let isSmallScreen = document.documentElement.clientWidth < 769
var imgdiv = document.createElement('div')
var imgdivWrapper = document.createElement('div')
imgdivWrapper.id = 'imgdivWrapper'
var img = document.createElement('img')
var imgdivStyle = `position:fixed;top: 0; 
                    bottom: 0; left: 0; 
                    right: 0;
                    padding: 50px 0;
                    background: rgba(0, 0, 0, .5); 
                    z-index: 9999;
                    display:none;
                    justify-content: center;
                    align-items:center;
                    cursor: zoom-out;`

var imgdivWrapperStyle = `width: 50%;
                          height: 100%;
                          overflow:scroll;
                        `
var imgStyle = `display: block; 
                margin: 0 auto; 
                position:relative; 
                top: 50%; 
                transform: translateY(-50%);
                `
                     
if (isSmallScreen) {
  imgdivStyle += 'background: rgba(0, 0, 0, 1);'
  imgStyle += 'width: 100%;'
  imgdivWrapperStyle += 'overflow: hidden;'
}
img.style.cssText = imgStyle 
imgdivWrapper.style.cssText = imgdivWrapperStyle
imgdiv.style.cssText = imgdivStyle
// img.src = 'http://stage.tigerobo.com/caishen/download?fk=xhcdXK4ZAw4Ie-tTV0XDSPqGRQi_X7g9Lfs4PWrtiDA2LYXSXuvYCQWAcy'
imgdiv.appendChild(imgdivWrapper)
imgdivWrapper.appendChild(img)
document.body.appendChild(imgdiv)

$(imgdiv).on('click', function (e) {
  if (e.target !== img) {
    hideImageView()
  }
})

$(img).on('click', function (e) {
  if (e.target === this) {
    hideImageView()
  } else {
    var a = document.createElement('a')
    a.target = '_blank'
    a.href = e.target.src
    a.click()
  }
})

export default function (sel) {
  $(document).on('click', sel, function (e) {
    var imgsrc = e.target.src
    img.src = imgsrc
    showImageView()
  })
}


// image view
var scrollTop = 0
function showImageView () {
  updateImageStyle()
  imgdiv.style.display = 'flex'
  scrollTop = getScrollTop()
  $('html').addClass('noscroll');
  setScrollTop(scrollTop)
}

function hideImageView () {
  imgdiv.style.display = 'none'
  $('html').removeClass('noscroll');
  setScrollTop(scrollTop)
}


function getScrollTop () {
  return (document.documentElement.scrollTop || 0) + (document.body.scrollTop || 0)
}


function setScrollTop (top) {
  document.documentElement.scrollTop = top
  document.body.scrollTop = top
}

function updateImageStyle () {
  if (document.body.clientWidth > document.body.clientHeight) {
    img.style.width = 'auto'
    img.style.height = '100%'
  } else {
    img.style.height = 'auto'
    img.style.width = '100%'
  }
}