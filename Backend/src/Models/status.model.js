const pool=require('../Config/db')

const updateStatus=async(id)=>{
    const query='UPDATE orders SET status=$1 RETURNING status';
       const result=await pool.query(query,[id]);
    return result.rows[0];

}

module.exports={updateStatus};