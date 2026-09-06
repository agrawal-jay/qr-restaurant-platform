const pool=require('../Config/db')

const createUser=async(userData)=>{

    const {name,email,passwordHash,restaurantId}=userData;
    const query=`INSERT INTO users (name,email,password_hash,restaurant_id) VALUES ($1,$2,$3,$4) RETURNING id,name,email,id,created_at`;
    const values=[
        name,email,passwordHash,restaurantId
    ]
    const result=await pool.query(query,values);

    return result.rows[0];

}

const findUserByEmail =async(email)=>{

    const query=`SELECT * FROM users where email=$1`;
    const result=await pool.query(query,[email]);
    return result.rows[0];

}



module.exports={
    createUser,findUserByEmail
}