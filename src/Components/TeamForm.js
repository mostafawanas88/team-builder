import React, { useState } from "react";

const TeamForm = (props) => {
    const { form, update, submit } = props;

    const handleSubmit = event => {
        event.preventDefault();
        submit();
    }

    const handleChange = event => {
        const {name, value} = event.target;
        update(name, value);
    }
    return (
        <form onSubmit={handleSubmit}>
        <div>
            <label>
                Username
                <input
                type="text"
                name="username"
                placeholder="type a username..."
                value={form.name}
                onChange={handleChange}
                />
            </label>
            <label>
                email
                <input
                type="text"
                name="email"
                placeholder="type an email..."
                value={form.email}
                onChange={handleChange}
                />
            </label>
            <label>
                Position
                <input
                type="text"
                name="email"
                placeholder="Select Position"
                value={form.position}
                onChange={handleChange}
                />
            </label>
        </div>
        </form>
    )
}

export default TeamForm;