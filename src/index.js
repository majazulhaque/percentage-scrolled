import "./styles.css";
var percentageVal = document.getElementById("percentage-val");

window.addEventListener("scroll", getPercentage);

function getPercentage() {
  var val = parseInt(
    ((document.documentElement.scrollTop + document.body.scrollTop) /
      (document.documentElement.scrollHeight -
        document.documentElement.clientHeight)) *
      100
  );
  percentageVal.innerText = val;
}
