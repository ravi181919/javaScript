const insertKeyDetails = document.querySelector('#insertKeyVal')

window.addEventListener('keydown', (e) => {
    insertKeyDetails.innerHTML = `
    <div class ='change'>
    <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
    </div>
    `
})