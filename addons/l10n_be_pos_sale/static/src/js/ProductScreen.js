/** @odoo-module **/

import Registries from "@point_of_sale/js/Registries";
import ProductScreen from "@point_of_sale/js/Screens/ProductScreen/ProductScreen";

export const PoSSaleBeProductScreen = (ProductScreen) =>
    class extends ProductScreen {
        async _onClickPay() {
            const has_origin_order = this.currentOrder.get_orderlines().some(line => line.sale_order_origin_id);
            if (this.env.pos.company.country && this.env.pos.company.country.code === "BE" && has_origin_order) {
                this.currentOrder.to_invoice = true;
            }
            return super._onClickPay(...arguments);
        }
    };

Registries.Component.extend(ProductScreen, PoSSaleBeProductScreen);
