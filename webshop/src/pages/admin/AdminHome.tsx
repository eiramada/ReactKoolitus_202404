import Button from "react-bootstrap/Button";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function AdminHome() {
  const { t } = useTranslation();

  return (
    <div>
      {" "}
      <Button as={Link as any} to="/admin/add-product" variant="primary">
        {t("add-product")}
      </Button>{" "}
      <Button
        as={Link as any}
        to="/admin/edit-product/:index"
        variant="secondary"
      >
        {t("edit-product")}
      </Button>{" "}
      <Button as={Link as any} to="/admin/maintain-products" variant="success">
        {t("maintain-products")}
      </Button>{" "}
      <Button
        as={Link as any}
        to="/admin/maintain-categories"
        variant="warning"
      >
        {t("maintain-categories")}
      </Button>{" "}
      <Button as={Link as any} to="/admin/maintain-shops" variant="info">
        {t("maintain-shops")}
      </Button>{" "}
      <Button as={Link as any} to="/admin/maintain-images" variant="info">
        {t("maintain-images")}
      </Button>{" "}
      <h1>{t("Welcome to React")}</h1>
    </div>
  );
}

export default AdminHome;
