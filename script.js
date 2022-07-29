<script>
    document.getElementById('submit-btn').addEventListener('click', (event) => {
  let element_span = document.getElementById('span');
  let new_span = document.createElement('span');
  new_span.innerText = 'Thank you for signing up😊🙌 ';

  element_span.appendChild(new_span);

});
</script>