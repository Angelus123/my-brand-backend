'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
  
    static associate({Role,Payment}) {
     this.belongsTo(Role,{foreignKey:"roleId",as:"role"})
     this.hasOne(Payment,{foreignKey:"userId",as:"plan"})
    }


    toJSON(){
      return {
        ...this.get(),
        // id:undefined,
        roleId:undefined,
        planId:undefined,
        photo:undefined,
        createdAt:undefined,
        updatedAt:undefined,
        password:undefined,
        passwordResetToken:undefined,
        teamInviteToken:undefined,
        cloudnary_id:undefined,
        isActive:undefined
      }
    }
  }
  User.init({
    uuid:{
     type:DataTypes.UUID,
     defaultValue:DataTypes.UUIDV4
    },
    firstName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    lastName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
    type:DataTypes.STRING,
    allowNull:false
    },
    password:{
      type:DataTypes.STRING,
      allowNull:false
    },
    profilePic:{
     type:DataTypes.STRING,
    },
    devType:{
      type:DataTypes.STRING,
      allowNull:false
    },
    roleId:{
      type:DataTypes.INTEGER,
    },
    roleName:{
      type:DataTypes.STRING,
      defaultValue:"free tier"
    },
    passwordResetToken:{
      type:DataTypes.STRING,
      defaultValue:""
    },
    teamInviteToken:{
      type:DataTypes.STRING,
      defaultValue:""
    },
    isActive:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    },
    isPaid:{
     type:DataTypes.BOOLEAN,
     defaultValue:false
    },
    paidPlan:{
      type:DataTypes.STRING,
      defaultValue:"free tier"
    }
  }, {
    sequelize,
    tableName:"users",
    modelName: 'User',
  });
  return User;
};


