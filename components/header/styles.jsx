import styled from "styled-components";

export const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 0.75rem;
	width: calc(100% - 1.5rem);
	height: 4vh;
	background-color: darkcyan;
	font-size: 14px;
	color: whitesmoke;

	.logo {
		cursor: default;
		user-select: none;
		color: red;
	}

	.list {
		display: flex;
		li {
			color: darkcyan;
			a {
				border-bottom-width: 2px;
				border-bottom-style: solid;
				border-bottom-color: transparent;

				&:hover {
					font-weight: 700;
				}
			}

			&:not(:last-child) {
				margin-right: 2rem;
			}
		}

		.active {
			color: #fff;
			a {
				font-weight: 700;
			}
		}
	}

`