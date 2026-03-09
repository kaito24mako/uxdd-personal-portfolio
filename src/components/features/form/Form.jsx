import { useForm, Controller } from "react-router-dom";
import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";

import { Row, Col, Button, Card, Form } from "react-bootstrap";

function ContactForm() {
  const schema = Joi.object({
    search: Joi.string().min(1).max(255),
  });

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(schema),
  });

  const onSearchSubmit = async (input) => {
    let searchData = await getFilmSearch(input);
    console.log(searchData);
  };
  return (
    <>
      <h2>Form</h2>
      <Form onValidate="noValidate" onSubmit={handleSubmit(onSearchSubmit)}>
        <Form.Label htmlFor="search">
          Search for Movie or TV Series by Title
        </Form.Label>

        <Form.Group>
          <Form.Control
            {...register("search")}
            controlId="search"
            type="text"
            placeholder="Search for Movie or TV Series by Title"
            aria-label="search"
            aria-describeby="search-for-movies-or-tv-series"
            aria-invalid={errors.search ? "true" : "false"}
            // disabled={isSubmitting}
          />
        </Form.Group>

        <p className="text-danger my-2">{errors.search?.message}</p>

        <Button
          className="big-button mt-2"
          variant="primary"
          type="submit"
          aria-label={"submit-button-for-search"}
        >
          Search 🔎
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
