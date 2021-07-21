import express from 'express';
import { getProducts } from './db.js';

//import bcrypt from 'bcrypt';

const server = express();
const PORT = 3401;

//server.use(json());

server.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Working'
    })
})

server.get("/products", async (req, res) => {
    const products = await getProducts();
    res.status(200).json({ products })
}) 

// server.post("/api/auth", async (req, res) => {
//     const { username, password } = req.body;
//     const aluno = await obtemAlunoPorNome(username);

//     if (aluno && await bcrypt.compare(password, aluno.password)) {
//         const sessionId = await insereSessao(aluno._id)
//         res.status(200).json({ token: sessionId })
//     } else {
//         res.sendStatus(404)
//     }
// })

// async function verificaAluno(req, res, next) {
//     const auth = req.headers.authorization?.split(' ') ?? []
//     console.log(auth)
//     if (auth.length > 0) {
//         const session = await obtemSessao(auth[1])
//         if (session && session.expiresAt > new Date()) {
//             await sessaoProlongada(session._id)
//             req.user = await obtemAluno(session.uid);
//             next()
//         } else {
//             res.sendStatus(401)
//         }
//     } else {
//         res.sendStatus(401)
//     }
// }

// server.get("/api/escolas/:id", async (req, res) => {
//     const escolas = await obtemEscola(req.params.id)
//     res.status(200).json({ escolas })
// })

// server.post("/api/escolas", async (req, res) => {
//     const escolas = await insereEscola(req.body)
//     res.status(200).json({ escolas })
// })

// server.get('/api/professores', async (req, res) => {
//     const professores = await obtemProfessores()
//     res.status(200).json({ professores })
// })

// server.get("/api/professores/:id", async (req, res) => {
//     const professores = await obtemProfessor(req.params.id)
//     res.status(200).json({ professores })
// })

// server.post("/api/Professores", async (req, res) => {
//     const professores = await insereProfessor(req.body)
//     res.status(200).json({ professores })
// })

// server.get("/api/aluno", verificaAluno, async (req, res) => {
//     res.status(200).json({
//         user: req.user.username,
//         ano: req.user.anoletivo,
//         escola: req.user.escola
//     })
// })

// server.get("/api/aluno/:id", async (req, res) => {
//     const aluno = await obtemAluno(req.params.id)
//     res.status(200).json({ aluno })
// })

// server.post("/api/aluno", async (req, res) => {
//     const id = await insereAluno(req.body)
//     res.status(200).json({ id })
// })

// server.get('/api/anoLetivo/:id', async (req, res) => {
//     const anoLetivo = await obtemAnoLetivo(req.params.id)
//     res.status(200).json({ anoLetivo })
// })

// server.post('/api/anoLetivo', async (req, res) => {
//     const anoLetivo = await insereAnoLetivo(req.body)
//     res.status(200).json({ anoLetivo })
// })

// server.get('/api/livros', async (req, res) => {
//     const livros = await obtemLivros()
//     res.status(200).json({ livros })
// })

// server.get('/api/livros/:id', async (req, res) => {
//     const livros = await obtemLivro(req.params.id)
//     res.status(200).json({ livros })
// })

// server.post("/api/livros", async (req, res) => {
//     const livros = await insereLivros(req.body)
//     res.status(200).json({ livros })
// })

server.listen(PORT, () => console.log('À escuta em ' + PORT));