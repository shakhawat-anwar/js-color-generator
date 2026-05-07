function gen(){
  const color = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.background = color;
  document.getElementById('color').innerText = color;
  document.getElementById('copyBtn').innerText = "Copy Color";
}

async function copyColor() {
  const currentColor = document.getElementById('color').innerText;
  const btn = document.getElementById('copyBtn');

  try {
    await navigator.clipboard.writeText(currentColor);
    alert("Color copied to clipboard: " + currentColor);
    btn.innerText = "Copied!";
  } catch (err) {
    console.log("Failed to copy: ", err);
  }
}