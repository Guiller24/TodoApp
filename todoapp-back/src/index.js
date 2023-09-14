const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database/sequelize');
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');


const UserRoutes = require('./routes/UserRoutes');
const AuthRoute = require('./routes/AuthRoute');
const TaskRoutes = require('./routes/TaskRoutes');

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', UserRoutes);
app.use('/api', AuthRoute);
app.use('/api', TaskRoutes);

try{
    sequelize.sync();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}catch(err){
  console.error(err);
}

