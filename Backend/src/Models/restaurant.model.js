const pool=require('../Config/db')

const createRestaurant=async (name)=>{
    const query='INSERT INTO restaurants (name) VALUES ($1) RETURNING id,name,created_at'

    const result=await pool.query(query,[name]);
    return result.rows[0];

}

module.exports={createRestaurant};

