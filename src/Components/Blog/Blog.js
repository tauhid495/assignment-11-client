import React from 'react';

const Blog = () => {
    return (
        <div>
            
            <img className='block  mx-auto' src="https://summitmedpeds.com/wp-content/uploads/2016/08/blog6-600x300.png" alt="" />
            
            <div className='md:grid gap-9 grid-cols-2 mdmx-20 my-20'>

                <div className='my-4 p-4 border shadow-xl bg-white'>
                    <h1>Question 1: Diffarance between Javascript and NodeJs</h1>
                    <p>Answer : <br />
                        * Javascript is a programming language. We use it for writing scripts on the website. <br />
                        * NodeJS is known as Javascript runtime environment.
                    </p> <br />
                    <p>
                        ** Javascript only runs in the browsers. <br />
                        ** We can run Javascript outside the browser with the help of NodeJS.
                    </p><br />
                    <p>
                        *** Javascript is basically used on the client-side. <br />
                        *** NodeJs is mostly used on the server-side.
                    </p><br />
                    <p>
                        **** Javascript runs in any browser engine as like  JS core in safari and Spidermonkey in Firefox.  <br />
                        **** The Javascript engine inside of node.js is V8 that parses and runs Javascript.
                    </p><br />
                    <p>
                        ***** Some of the javascript frameworks are RamdaJS, TypedJS, etc.   <br />
                        ***** Some of the Nodejs modules are Lodash, express etc. These modules need to be imported from npm.
                    </p><br />
                </div>
                <div className='my-4 p-4 border shadow-xl bg-white'>
                    <h1>Question 1: Diffarance between SQL and NoSQL</h1>
                    <p>Answer : <br />
                        * SQL is pronounced as “S-Q-L” or as “See-Quel” and is primarily known to be a Relational Database <br />
                        * NoSQL is a distributed or Non-relational Database.
                    </p> <br />
                    <p>
                        ** Database in SQL is in table format. They are scalable vertically. <br />
                        ** NoSQL databases are document based with key-value pairs and graph databases.These are horizontally scalable.
                    </p><br />
                    <p>
                        *** SQL uses specialized DB hardware to enhance performance. <br />
                        *** NoSQL uses commodity hardware.
                    </p><br />
                    <p>
                        **** Use of SQL queries and syntax to analyse and get further data insights. Used for OLAP systems.  <br />
                        **** Apply different types of database technologies.
                    </p><br />
                    <p>
                        ***** Examples are Sqlite, MySql, Oracle, Postgres and MS-SQL.   <br />
                        ***** Examples are Cassandra, MongoDB, BigTable, Redis, RavenDb, Hbase, Neo4j and CouchDb.
                    </p><br />

                </div>
                <div className='my-4 p-4 border shadow-xl bg-white'>
                    <h1>Question 1: What is the purpose of JWT and how does it work?</h1>
                    <p>Answer : <br />
                        JSON Web Tokens  or JWTs are most commonly used to identify an authenticated user. They are issued by an authentication server and are consumed by the client-server to secure its APIs. <br />
                        A JSON web token is JSON Object which is used to securely transfer information over the web  between two parties. It can be used for information exchange and can also be used for an authentication system. <br />
                        How it works: Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. <br />

                        User sign-in using username and password or google/facebook. <br />
                        Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. <br />
                        User’s Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                        Resource server then verifies the authenticity of the token using the secret salt/ public key.

                    </p><br />

                </div>


            </div>
        </div>
    );
};

export default Blog;