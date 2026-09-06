const pool=require('../Config/db')

const createRestaurant=async (name)=>{
    const query='INSERT INTO restaurants (name) VALUES ($1) RETURNING id,name,created_at'

    const result=await pool.query(query,[name]);
    return result.rows[0];

}

const getRestaurantById=async (id)=>{
    const query='SELECT * FROM restaurants where id=$1';
    const result=await pool.query(query,[id]);
    return result.rows[0];
}

const updateRestaurantById=async (name,id)=>{
    const query='UPDATE restaurants SET name=$1 where id=$2  RETURNING id, name, created_at';
    const result=await pool.query(query,[name,id]);
    return result.rows[0];
}

module.exports={createRestaurant,getRestaurantById,updateRestaurantById};

