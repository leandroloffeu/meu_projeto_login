const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

//Variável para armazenar mensagens de erro
let errorMessage = '';

// Rota para a página de login
app.get('/', (req, res) => {
    res.render('login', { errorMessage }); // Passa a mensagem de erro para a página
});


app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username === 'Fabricio' && password === '123') {
        res.render('home', { username });
    } else {
        errorMessage = 'Credenciais inválidas. Tente novamente.'; 
        res.redirect('/'); // Redireciona de volta para a página de login
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});