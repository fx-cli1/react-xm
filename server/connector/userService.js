let userModel = require('../model/userModel');


module.exports = {
    query:(params)=>{
        return userModel.find(params)
    },
    add:(list)=>{
        return userModel.insertMany(list);
    }
    // addmany: (list) => {
    //     return userModel.insertMany(list);
    // },
    // add: (data) => {
    //     return userModel.insertMany([data]);
    // },
    // queryall:(params,skipnum,shownum)=>{
    //     return  userModel.find(params).skip(skipnum).limit(shownum).sort({"usertype": 1});
    // },
    // quertcount: (params) => {
    //     return userModel.find(params).count()
    // },
    // delete: (_id) => {
    //     return userModel.deleteOne({_id})
    // },
    // group:()=>{
    //     return  userModel.aggregate([
    //         {
    //             $group:
    //                 {
    //                     _id:"$usertype",
    //                     count: { $sum: 1 }//类似于.count 但这是是管道函数　　所以还需要加上$sum关键词
    //                 },
    //         },
    //     ])
    // }
}