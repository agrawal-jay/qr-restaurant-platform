require("dotenv").config({
    path:require("path").resolve(__dirname,"../.env")
});
const express=require('express')
const cors=require('cors')
const pool=require('./Config/db')
const authRoutes=require('./Routes/auth.routes')


const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRoutes);

const PORT=process.env.PORT ||5000;

const startServer = async () => {
    try {
        const result = await pool.query(`
            SELECT 
                current_database(),
                current_schema();
        `);

        console.log("Database:", result.rows[0].current_database);
        console.log("Schema:", result.rows[0].current_schema);

        const tables = await pool.query(`
            SELECT table_schema, table_name
            FROM information_schema.tables
            WHERE table_name IN ('users', 'restaurants');
        `);

        console.log("Tables:", tables.rows);

        console.log("PostgreSQL connected successfully");
    }
    catch (error) {
        console.error("Database connection failed:", error);
    }
};
startServer();

app.listen(PORT,()=>{console.log(`app running on http://localhost:${PORT}`)});


