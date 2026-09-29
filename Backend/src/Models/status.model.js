const pool=require('../Config/db')

const updateStatus=async(status,id)=>{
    const query='UPDATE orders SET status=$1 where id=$2 RETURNING status';
       const result=await pool.query(query,[status,id]);
    return result.rows[0];

}

module.exports={updateStatus};