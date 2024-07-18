
// all the imports here
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';


// the main function
async function main() {
    try {
        // connect the server to the mongodb database
        await mongoose.connect(config.dataBaseUrl as string);

        // running the server
        app.listen(config.port, () => {
            console.log(`ecoExpress app is listening on port ${config.port}`);
        });
    } catch (error) {
        console.log(error);
    }
}


// call the main function
main()