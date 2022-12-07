using Creeker.Models;
using Creeker.Utils;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;

namespace Creeker.Repositories
{
    public class UserRepository : BaseRepository, IUserRepository
    {

        public UserRepository(IConfiguration configuration) : base(configuration) { }

        public List<User> GetAllUsers()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT u.Id, u.UserName, u.FirstName, u.LastName, u.Email,
                    u.[Password], u.ImageLocation, u.CreateDateTime, u.IsActive,
                    u.UserTypeId, ut.Id, ut.[Name] FROM [User] u
                    LEFT JOIN UserType ut 
                    ON u.UserTypeId = ut.Id";
                    var reader = cmd.ExecuteReader();
                    var users = new List<User>();
                    var types = new List<UserType>();
                    while (reader.Read())
                    {
                        var user = new User()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserName = DbUtils.GetString(reader, "UserName"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Password = DbUtils.GetString(reader, "Password"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                            UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Name = DbUtils.GetString(reader, "Name"),
                            }
                        };
                        if (reader.IsDBNull(reader.GetOrdinal("ImageLocation")))
                        {
                            user.ImageLocation = "https://as1.ftcdn.net/v2/jpg/03/91/19/22/1000_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg";
                        }
                        users.Add(user);
                    }
                    reader.Close();
                    return users;
                }
            }
        }

        public User GetUser(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT u.Id, u.UserName, u.FirstName, u.LastName, u.Email,
                    u.[Password], u.ImageLocation, u.CreateDateTime, u.IsActive,
                    u.UserTypeId, ut.Id, ut.[Name] FROM [User] u
                    LEFT JOIN UserType ut 
                    ON u.UserTypeId = ut.Id
                    WHERE u.Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    var reader = cmd.ExecuteReader();

                    User user = null;
                    if (reader.Read())
                    {
                        user = new User()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserName = DbUtils.GetString(reader, "UserName"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Password = DbUtils.GetString(reader, "Password"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                            UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Name = DbUtils.GetString(reader, "Name"),
                            }
                        };
                        if (reader.IsDBNull(reader.GetOrdinal("ImageLocation")))
                        {
                            user.ImageLocation = "https://as1.ftcdn.net/v2/jpg/03/91/19/22/1000_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg";
                        }
                    }
                    reader.Close();
                    return user;
                }
            }

        }

        public User GetUserByLogin(string email, string password)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    SELECT u.Id, u.UserName, u.FirstName, u.LastName, u.Email,
                    u.[Password], u.ImageLocation, u.CreateDateTime, u.IsActive,
                    u.UserTypeId, ut.Id, ut.[Name] FROM [User] u
                    LEFT JOIN UserType ut 
                    ON u.UserTypeId = ut.Id
                    WHERE Email = @email AND Password = @password";
                    DbUtils.AddParameter(cmd, "@email", email);
                    DbUtils.AddParameter(cmd, "@password", password);

                    var reader = cmd.ExecuteReader();


                    User user = null;
                    if (reader.Read())
                    {
                        user = new User()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            UserName = DbUtils.GetString(reader, "UserName"),
                            FirstName = DbUtils.GetString(reader, "FirstName"),
                            LastName = DbUtils.GetString(reader, "LastName"),
                            Email = DbUtils.GetString(reader, "Email"),
                            Password = DbUtils.GetString(reader, "Password"),
                            ImageLocation = DbUtils.GetString(reader, "ImageLocation"),
                            CreateDateTime = DbUtils.GetDateTime(reader, "CreateDateTime"),
                            IsActive = reader.GetBoolean(reader.GetOrdinal("IsActive")),
                            UserTypeId = DbUtils.GetInt(reader, "UserTypeId"),
                            UserType = new UserType()
                            {
                                Id = DbUtils.GetInt(reader, "UserTypeId"),
                                Name = DbUtils.GetString(reader, "Name"),
                            }
                        };
                        if (reader.IsDBNull(reader.GetOrdinal("ImageLocation")))
                        {
                            user.ImageLocation = "https://as1.ftcdn.net/v2/jpg/03/91/19/22/1000_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg";
                        }
                    }
                    reader.Close();
                    return user;
                }
            }

        }


        public void AddUser(User user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    INSERT INTO [User](UserName, FirstName, LastName, Email, [Password], ImageLocation, CreateDateTime, IsActive, UserTypeId)
                    OUTPUT INSERTED.ID        
                    VALUES(@UserName, @FirstName, @LastName, @Email, @Password, @ImageLocation, @CreateDateTime, @IsActive, @UserTypeId)";
                    cmd.Parameters.AddWithValue("@UserName", user.UserName);
                    cmd.Parameters.AddWithValue("@FirstName", user.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", user.LastName);
                    cmd.Parameters.AddWithValue("@Email", user.Email);
                    cmd.Parameters.AddWithValue("@Password", user.Password);
                    cmd.Parameters.AddWithValue("@ImageLocation", user.ImageLocation);
                    cmd.Parameters.AddWithValue("@CreateDateTime", DateTime.Now);
                    cmd.Parameters.AddWithValue("@IsActive", user.IsActive = true);
                    cmd.Parameters.AddWithValue("@UserTypeId", user.UserTypeId = 1);
                    user.Id = (int)cmd.ExecuteScalar();

                }
            }
        }
        // this needs to be fixed. Something to do with the id as it returns bad request 400 error.
        public void UpdateUser(User user)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                    UPDATE [user]
                    SET UserName = @userName,
                    FirstName = @firstName,
                    LastName = @lastName,
                    Email = @email, 
                    Password = @password,
                    IsActive = @isActive,
                    UserTypeId = @userTypeId,
                    ImageLocation = @imageLocation
                    WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", user.Id);
                    cmd.Parameters.AddWithValue("@userName", user.UserName);
                    cmd.Parameters.AddWithValue("@firstName", user.FirstName);
                    cmd.Parameters.AddWithValue("@lastName", user.LastName);
                    cmd.Parameters.AddWithValue("@email", user.Email);
                    cmd.Parameters.AddWithValue("@password", user.Password);
                    cmd.Parameters.AddWithValue("@isActive", user.IsActive);
                    cmd.Parameters.AddWithValue("@userTypeId", user.UserTypeId);
                    cmd.Parameters.AddWithValue("@imageLocation", user.ImageLocation);
                    cmd.ExecuteNonQuery();
                }
            }
        }


        public void DeleteUser(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM [User] WHERE Id = @id";
                    cmd.Parameters.AddWithValue("@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }















    }

}
