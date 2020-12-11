// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// Bonus:
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.
// Consiglio del giorno: per alcuni task, potrebbe essere necessario fare delle ricerche e capire come lavorano alcune funzioni o direttive leggendo le documentazioni ufficiali ed analizzando i relativi esempi.

var app = new Vue (
  {
    el: '#lista' ,
    data: {
      listaCose: [
        'comprare le uova', 'comprare il guanciale', 'comprare il pecorino', 'comprare il pepe nero'
      ] ,
      nuovoElemento: '' ,
      ricerca: '',
      listaFiltrata: [] ,
    } ,
      created: function() {
        this.listaCose.sort()
        this.listaFiltrata = this.listaCose
      },
      methods: {
        aggiungiElemento: function() {
          if(this.nuovoElemento == '') {
            alert('Inserisci almeno una parola')
          } else {
            this.listaFiltrata.push(this.nuovoElemento)
            this.listaFiltrata.sort()
          }
          this.nuovoElemento = '';
        },
        eliminaElemento: function(index) {
          this.listaFiltrata.splice(index, 1)
          if(this.listaFiltrata.length == 0) {
            alert('Bravo! Non ci sono più cose da fare!')
          }
        },
        filtraElemento: function() {
          this.listaFiltrata = this.listaCose.filter(
            (element) => {
              return element.includes(this.ricerca)
              }
          )
        }
      }
  }
)
