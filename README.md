<!DOCTYPE html>
<html>
<body>

<div>
<span>In this task, you will be building a <code>Budget&nbsp;Manager&nbsp;App</code> that helps users manage their <code>budgets</code> and <code>expenses</code>. The app consists of two main components, <code>BudgetForm</code> and <code>ExpenseForm</code>, which are used to <code>add&nbsp;budgets</code> and <code>expenses</code>, respectively.

Let's go through the functionality of each component in detail.

<code>BudgetForm</code> Component:
<ul>
<li>The BudgetForm component is responsible for <code>adding&nbsp;budgets</code> to the app. It has two input fields, one for the <code>budget&nbsp;name</code> and another for the <code>budget&nbsp;amount</code>.</li>

<li>When the form is <code>submitted</code>, a handleSubmit function should be called, which <code>prevents&nbsp;the&nbsp;default&nbsp;form&nbsp;submission&nbsp;behavior</code>, extracts the <code>name</code> and <code>amount</code> from the input fields using <code>useState</code> hooks, and then add the <code>name</code> and <code>amount&nbsp;of&nbsp;the&nbsp;budget</code> to <code>budgets</code> array.</li>

<li>After submitting the form, the input fields should <code>reset&nbsp;to&nbsp;empty&nbsp;values</code>.</li>
</ul>

<code>ExpenseForm</code> Component:
<ul>
<li>The ExpenseForm component is responsible for <code>adding&nbsp;expenses</code> to the app. It has three input fields, one for the <code>expense&nbsp;name</code>, another for the <code>expense&nbsp;amount</code>, and a <code>select&nbsp;field&nbsp;for&nbsp;selecting&nbsp;the&nbsp;budget&nbsp;category</code>.</li>

<li>The <code>categories</code> are populated in the select field using the budgets array received as props from the parent App component.</li>

<li>When the form is <code>submitted</code>, an onSubmit function should be called, which <code>prevents&nbsp;the&nbsp;default&nbsp;form&nbsp;submission&nbsp;behavior</code>, extracts the <code>name</code>, <code>amount</code>, and <code>categoryId&nbsp;(selected&nbsp;budget&nbsp;category)</code> from the input fields using <code>useState</code> hooks, and then add the <code>name</code>, <code>amount</code>, and <code>categoryID</code> to <code>expenses</code> array.</li>

<li>After submitting the form, the input fields should <code>reset&nbsp;to&nbsp;empty&nbsp;values</code>.</li>
</ul>

<code>App</code> Component:
<ul>
<li>The App component is the main component that renders the <code>BudgetForm</code> and <code>ExpenseForm</code> components.</li>

<li>It also maintains the state for <code>budgets</code> and <code>expenses</code> using useState hooks.</li>

<li>The budgets state is an array that holds the list of budgets added by the user, and the expenses state is an array that holds the list of expenses added by the user.</li>

<li>The <code>getCategoryName</code> function is a utility function defined in the parent App component. It takes a <code>categoryId&nbsp;as&nbsp;an&nbsp;argument</code> and <code>finds&nbsp;the&nbsp;corresponding&nbsp;budget&nbsp;category&nbsp;from&nbsp;the&nbsp;budgets&nbsp;array</code>.</li>
</ul>



<code>Note:&nbsp;</code><br>
**Do not remove the given boilerplate.**<br>
**Do not remove the classes and Ids from the boilerplate.**<br>
**Use Date.now() as categoryId.**<br></span>
</div>
</body>
</html>
