import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import '../../css/admin/manage/menu.scss';


class Menu extends Component {
    render() {
        const { datatables } = this.props;
        let parents = {};

        // Get all parents.
        Object.keys(datatables).map((id) => {
            const datatable = datatables[ id ];
            const parent = datatable.parent;
            const link = 'links' === id ? '/' : `/${id}`;

            // Output each parent once.
            if ( parent && ! parents.hasOwnProperty( parent ) ) {
                parents[ parent ] = {
                    name: parent,
                    active: false,
                    link,
                };
            }

            // Check if this path is active.
            if ( link === this.props.location.pathname ) {
                parents[ parent ].active = true;
            }
        });

        return (
            <Fragment>
                <div className="eafl-admin-manage-parent-menu">
                    {
                        Object.keys(parents).map((key, index) => {
                            const parent = parents[ key ];
                            
                            return (
                                <NavLink to={ parent.link } className={ `eafl-admin-manage-menu-item${ parent.active ? ' eafl-admin-manage-menu-item-active' : ''}` } key={ index } exact>{ parent.name }</NavLink>
                            )
                        })
                    }
                </div>
                <div className="eafl-admin-manage-child-menu">
                {
                    Object.keys(datatables).map((id, index) => {
                        const datatable = datatables[ id ];
                        const parent = datatable.parent;
                        const link = 'links' === id ? '/' : `/${id}`;

                        // Check requirement.
                        let hasAccess = true;
                        if ( datatable.hasOwnProperty( 'required' ) && ( ! eafl_admin.addons.hasOwnProperty( datatable.required ) || true !== eafl_admin.addons[ datatable.required ] ) ) {
                            hasAccess = false;
                        }

                        // Only show children for active parent.
                        if ( parents.hasOwnProperty( parent ) && parents[ parent ].active  ) {
                            let label = datatable.hasOwnProperty('title') ? datatable.title : datatable.label.plural;

                            if ( ! hasAccess ) {
                                label += '*';
                            }

                            return (
                                <NavLink to={ link } className={ `eafl-admin-manage-menu-item${ hasAccess ? '' : ' eafl-admin-manage-menu-item-requirement'}` } activeClassName="eafl-admin-manage-menu-item-active" key={ index } exact>{ label }</NavLink>
                            )
                        } else {
                            return null;
                        }
                    })
                }
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Menu)
