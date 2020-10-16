import React from 'react'

    function uploadBookPage(){
        return (
                <div style={{ maxWidth: '700px', margin: '2rem auto'}}>
                    <div style={{ textAlign: 'center', marginBottom:'2rem'}}>
                        <h2>Add Books</h2>

                        <form onSubmit >

                            <br />
                            <br />
                            <label>Book Name</label>
                                <input 
                                   oncChange
                                   value
                                />
                                <br />
                                <br />
                                <label>Book Author</label>
                                <textarea
                                    oncChange
                                    value
                                />
                                <br />
                                <br />
                                <label>Book ISBN</label>
                                <input 
                                    oncChange
                                    value
                                    type="number"
                                />
                                <br />
                                <br />
                                <label>Book Price</label>
                                <input 
                                    oncChange
                                    value
                                    type="number"
                                />
                                <br />
                                <br />
                                <label>Additional Info</label>
                                <textarea 
                                    oncChange
                                    value
                                    
                                />
                                <br />
                                <br />

                                <button
                                    onClick
                                >
                                    Submit
                                </button>


                        </form>
                    </div>
                </div>

            
        )
    }

    export default uploadBookPage