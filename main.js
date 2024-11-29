const { createApp } = Vue

createApp({
    data() {
        return {
            showContact: 0,
            selectedContact: null,
            cercaContatto: '',
            userAccount: [
                {
                    nomeUser: 'Alice',
                    avatarUser: 'img/01.png',
                }
            ],
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/05.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-01-10T15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '2020-01-10T15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '2020-01-10T16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/06.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-03-20T16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '2020-03-20T16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '2020-03-20T16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/08.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-03-28T10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '2020-03-28T10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '2020-03-28T16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandra B.',
                    avatar: 'img/03.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-01-10T15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '2020-01-10T15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/04.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-01-10T15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '2020-01-10T15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/07.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-01-10T15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '2020-01-10T15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '2020-01-10T15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/08.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-01-10T15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '2020-01-10T15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/02.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-01-10T15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '2020-01-10T15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '2020-01-10T15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Giulia',
                    avatar: 'img/03.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-02-12T14:20:30',
                            message: 'Hai sentito la nuova canzone di Elisa?',
                            status: 'sent'
                        },
                        {
                            date: '2020-02-12T14:45:00',
                            message: 'Sì! È fantastica, la ascolto in loop.',
                            status: 'received'
                        },
                        {
                            date: '2020-02-12T14:46:00',
                            message: 'Anche io! Non riesco a smettere!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Marco',
                    avatar: 'img/05.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-03-18T09:15:00',
                            message: 'Buongiorno, hai sistemato la bici?',
                            status: 'received'
                        },
                        {
                            date: '2020-03-18T09:30:00',
                            message: 'Sì, tutto pronto per il weekend!',
                            status: 'sent'
                        },
                        {
                            date: '2020-03-18T09:35:00',
                            message: 'Perfetto, ci vediamo sabato allora.',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Serena',
                    avatar: 'img/08.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-05-05T18:10:00',
                            message: 'Hai preso i biglietti per il concerto?',
                            status: 'sent'
                        },
                        {
                            date: '2020-05-05T18:25:00',
                            message: 'Sì, li ho già stampati. Non vedo l’ora!',
                            status: 'received'
                        },
                        {
                            date: '2020-05-05T18:30:00',
                            message: 'Nemmeno io, sarà fantastico!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Luca',
                    avatar: 'img/01.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-07-22T20:15:55',
                            message: 'Ti sei ricordato di pagare la bolletta?',
                            status: 'sent'
                        },
                        {
                            date: '2020-07-22T20:20:00',
                            message: 'Sì, fatto ieri sera!',
                            status: 'received'
                        },
                        {
                            date: '2020-07-22T20:21:00',
                            message: 'Ottimo, grazie!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Chiara',
                    avatar: 'img/04.png',
                    visible: true,
                    messages: [
                        {
                            date: '2020-08-30T12:00:00',
                            message: 'Pranziamo insieme oggi?',
                            status: 'received'
                        },
                        {
                            date: '2020-08-30T12:05:00',
                            message: 'Certo! Ti va una pizza?',
                            status: 'sent'
                        },
                        {
                            date: '2020-08-30T12:10:00',
                            message: 'Perfetto, ci vediamo al solito posto.',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
    methods: {
        formatDate(date) {
            const d = new Date(date);  
            const hours = d.getHours().toString().padStart(2, '0');  
            const minutes = d.getMinutes().toString().padStart(2, '0');
            return  `${hours}:${minutes}`;
        },

        // Mostrare la chat e il profilo attivo al click del contatto
        cambioChat(index) {
            this.showContact = index;
            this.selectedContact = index;
        },

        getCurrentTime() {
            const now = new Date();
            return now;
        },
        

        addMessage(event) {
            if (event.key === 'Enter') {
                const newMessage = event.target.value;
                if (newMessage.trim() !== '') { // Evita messaggi vuoti
                    const currentDateTime = this.getCurrentTime();
        
                    // Aggiungi il nuovo messaggio alla lista
                    this.contacts[this.showContact].messages.push({
                        message: newMessage,
                        status: 'sent',
                        date: currentDateTime,
                    });
        
                    console.log("Nuovo messaggio aggiunto:", newMessage);
                    console.log("Contatto attivo:", this.contacts[this.showContact]);
        
                    // Resetta l'input
                    event.target.value = '';
        
                    // Array di risposte casuali
                    const risposte = [
                        "Certo!",
                        "Come vuoi tu!",
                        "Non sono sicuro.",
                        "Vediamo domani.",
                        "Fantastico!",
                        "Puoi ripetere?",
                        "Interessante!",
                        "Non lo so, scusa.",
                        "Possiamo parlarne dopo?",
                        "Ottima idea!",
                        "Sono d'accordo!"
                    ];
        
                    setTimeout(() => {
                        const risContatto = risposte[Math.floor(Math.random() * risposte.length)];
                        const rispostaDateTime = this.getCurrentTime(); // Ora per la risposta
                        this.contacts[this.showContact].messages.push({
                            message: risContatto,
                            status: 'received',
                            date: rispostaDateTime,
                        });
                    }, 1000);
                }
            }
        },
        
        getLastMessageDate(contact) {
            if (contact.messages && contact.messages.length > 0) {
                const lastMessage = contact.messages[contact.messages.length - 1];
                return this.formatDate(lastMessage.date);
            }
        },
        getLastMessageText(contact) {
            if (contact.messages && contact.messages.length > 0) {
                const lastText = contact.messages[contact.messages.length - 1];
                return lastText?.message || 'Messaggio non disponibile';
            }
            return 'Nessun messaggio';
        },
        
    },
    mounted() {
    },
    computed: {
        filteredContacts() {
            return this.contacts.filter(contatto => {
                return contatto.name.toLowerCase().includes(this.cercaContatto.toLowerCase())
            });
        },
    },
}).mount('#window');
