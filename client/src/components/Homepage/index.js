import React from 'react';
import { Button } from 'reactstrap';

function HomePage(props) {

    return (
        <div className="container backgroundColor homepage text-center mt-4">
            <h1>Health<span className="text-danger">App</span>!</h1>
            <p>Welcome to HealthApp.</p>
            <p>Here, Users can track their Health, Medications, Excersice, Meals, and
            more!</p>
            <p>In order to use HealthApp You must create an account. To create an account please click
                the button below. If Already have an account please click "Login" at the top of the page.
            </p>
            <Button color="primary">Submit</Button>{' '}
        </div>

    )
}

export default HomePage;