import React from "react";
import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      {" "}
      <Button as={Link} to="admin/add-product" variant="primary">
        {t("add-product")}
      </Button>{" "}
      <Button as={Link} to="admin/edit-product/:index" variant="secondary">
        {t("edit-product")}
      </Button>{" "}
      <Button as={Link} to="admin/maintain-products" variant="success">
        {t("maintain-products")}
      </Button>{" "}
      <Button as={Link} to="admin/maintain-categories" variant="warning">
        {t("maintain-categories")}
      </Button>{" "}
      <Button as={Link} to="admin/maintain-shops" variant="info">
        {t("maintain-shops")}
      </Button>{" "}
      <h1>{t("Welcome to React")}</h1>
    </div>
  );
}

export default AdminHome;
