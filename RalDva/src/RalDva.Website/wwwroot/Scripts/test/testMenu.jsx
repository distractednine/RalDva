import React from 'react';
import ReactDom from 'react-dom';
import {ButtonToolbar, Button} from 'react-bootstrap';

const Recipe = props =>
    <section id={props.name.toLowerCase().replace(/ /g, "-")}>
        <h1>{props.name}</h1>
        <ul className="ingredients">
        {props.ingredients.map((ingredient, i) =>
            <li key={i}>{ingredient.name}</li>
    )}
</ul>
<section className="instructions">
<h2>Cooking Instructions</h2>
{props.steps.map((step, i) =>
    <p key={i}>{step}</p>
    )}
</section>
</section>

const ButtonsInstance = props => 
    <ButtonToolbar>
      {/* Standard button */}
      <Button>Default</Button>

{/* Provides extra visual weight and identifies the primary action in a set of buttons */}
<Button bsStyle="primary">Primary</Button>

{/* Indicates a successful or positive action */}
<Button bsStyle="success">Success</Button>

{/* Contextual button for informational alert messages */}
<Button bsStyle="info">Info</Button>

{/* Indicates caution should be taken with this action */}
<Button bsStyle="warning">Warning</Button>

{/* Indicates a dangerous or potentially negative action */}
<Button bsStyle="danger">Danger</Button>

{/* Deemphasize a button by making it look like a link while maintaining button behavior */}
<Button bsStyle="link">Link</Button>
</ButtonToolbar>


const TestMenu = ({ title, recipes }) =>
    <article>
        <header>
        <h1>{title}</h1>
        </header>

        <ButtonsInstance/>

        <div className="recipes">
        {recipes.map((recipe, i) =>
            <Recipe key={i} {...recipe}/>
        )}
</div>
</article>

export default TestMenu;